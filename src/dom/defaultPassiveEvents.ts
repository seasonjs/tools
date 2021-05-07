// https://www.chromestatus.com/feature/5745543795965952
// https://github.com/zzarcon/default-passive-events#readme
export const eventListenerOptionsSupported = () => {
  let supported = false;

  try {
    const opts = Object.defineProperty({}, 'passive', {
      get() {
        supported = true;
      },
    });

    // @ts-ignore
    window.addEventListener('test', null, opts);
    // @ts-ignore
    window.removeEventListener('test', null, opts);
  } catch (e) {}

  return supported;
};
const defaultOptions = {
  passive: true,
  capture: false,
};
const supportedPassiveTypes = [
  'scroll',
  'wheel',
  'touchstart',
  'touchmove',
  'touchenter',
  'touchend',
  'touchleave',
  'mouseout',
  'mouseleave',
  'mouseup',
  'mousedown',
  'mousemove',
  'mouseenter',
  'mousewheel',
  'mouseover',
];
const getDefaultPassiveOption = (
  passive: boolean | undefined,
  eventName: string,
) => {
  if (passive !== undefined) return passive;

  return supportedPassiveTypes.indexOf(eventName) === -1
    ? false
    : defaultOptions.passive;
};

const getWritableOptions = (
  options: boolean | AddEventListenerOptions | undefined,
) => {
  const passiveDescriptor = Object.getOwnPropertyDescriptor(options, 'passive');

  return passiveDescriptor &&
    passiveDescriptor.writable !== true &&
    passiveDescriptor.set === undefined
    ? Object.assign({}, options)
    : options;
};
type superMethodProps = {
  (
    type: string,
    listener: EventListenerOrEventListenerObject | null,
    options?: boolean | AddEventListenerOptions | undefined,
  ): void;
  call?: any;
};
const overwriteAddEvent = (superMethod: superMethodProps) => {
  EventTarget.prototype.addEventListener = function (type, listener, options) {
    const usesListenerOptions = typeof options === 'object' && options !== null;
    // @ts-ignore
    const useCapture = usesListenerOptions ? options.capture : options;

    options = usesListenerOptions ? getWritableOptions(options) : {};
    // @ts-ignore
    if ('passive' in options) {
      options.passive = getDefaultPassiveOption(options.passive, type);
    }
    // @ts-ignore
    if ('capture' in options) {
      options.capture =
        useCapture === undefined ? defaultOptions.capture : useCapture;
    }

    superMethod.call(this, type, listener, options);
  };

  // @ts-ignore
  EventTarget.prototype.addEventListener._original = superMethod;
};

const supportsPassive = eventListenerOptionsSupported();

export function defaultPassiveEvents() {
  if (supportsPassive) {
    const addEvent = EventTarget.prototype.addEventListener;
    overwriteAddEvent(addEvent);
  }
}
