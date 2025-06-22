export function mergeClassNames(...classNames) {
  return classNames.filter(Boolean).join(' ');
}
export { manageLocalStorage } from './local-storage';