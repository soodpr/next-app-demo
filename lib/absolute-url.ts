export function absoluteURL(uri: string) {
  //return `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${uri}`;
  return `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${uri}?share=${process.env.DRUPAL_CLOUD_IDE_SHARE_CODE}`;
}
