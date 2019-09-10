/**
 * Remove the literal key `foo` and its associated value from
 * the query string of a url. Return the url with the literal key
 * `foo` and its associated value removed, if present. If the literal
 * key `foo` does not exist in the query string, return the input url
 * unmodified. All inputs are guaranteed to be well formed. All outputs
 * must be well formed.
 *
 * @param {string} url
 * @return {string}
 */

export default function removeFooFromUrl(url) {
  const [authority, query = ''] = url.split('?');
  const formattedUrl = query
    .split('&')
    .filter(params => !params.startsWith('foo='))
    .join('&');
  return formattedUrl.length === 0
    ? authority
    : [authority, formattedUrl].join('?');
}

describe('removeFooFromUrl', () => {
  it('should return the string unmodified if there are no query params', () => {
    expect(removeFooFromUrl('https://www.segment.com')).toEqual(
      'https://www.segment.com'
    );
  });

  it('should return the string unmodified if there is a single query param and `foo` is not present', () => {
    expect(removeFooFromUrl('https://www.segment.com?a=b')).toEqual(
      'https://www.segment.com?a=b'
    );
  });

  it('should return the string unmodified if there are multiple query params and `foo` is not present', () => {
    expect(removeFooFromUrl('https://www.segment.com?a=b&c=d')).toEqual(
      'https://www.segment.com?a=b&c=d'
    );
  });

  it('should return the string unmodified if `foo` is present in the sitename', () => {
    expect(removeFooFromUrl('https://www.foo.com')).toEqual(
      'https://www.foo.com'
    );
  });

  it('should return the string unmodified if `foo` is present in the top level domain', () => {
    expect(removeFooFromUrl('https://www.segment.foo')).toEqual(
      'https://www.segment.foo'
    );
  });

  it('should return the string unmodified if `foo` is present in the subdomain', () => {
    expect(removeFooFromUrl('https://foo.segment.com')).toEqual(
      'https://foo.segment.com'
    );
  });

  it('should return the string unmodified if `foo` is present as a value in the query string', () => {
    expect(removeFooFromUrl('https://www.segment.com?a=foo')).toEqual(
      'https://www.segment.com?a=foo'
    );
  });

  it('should return the string unmodified if `foo` is present as a suffix of a query param', () => {
    expect(removeFooFromUrl('https://www.segment.com?afoo=bar')).toEqual(
      'https://www.segment.com?afoo=bar'
    );
  });

  it('should return the string unmodified if `foo` is present as a prefix of a query param', () => {
    expect(removeFooFromUrl('https://www.segment.com?food=bar')).toEqual(
      'https://www.segment.com?food=bar'
    );
  });

  it('should remove `foo` and the `?` delimeter if `foo` is the only query parameter', () => {
    expect(removeFooFromUrl('https://www.segment.com?foo=bar')).toEqual(
      'https://www.segment.com'
    );
  });

  it('should remove `foo` and the trailing `&` delimeter if `foo` is the last query parameter', () => {
    expect(removeFooFromUrl('https://www.segment.com?a=b&foo=bar')).toEqual(
      'https://www.segment.com?a=b'
    );
  });

  it('should remove `foo` if it is present as any query parameter', () => {
    expect(removeFooFromUrl('https://www.segment.com?a=b&foo=bar&c=d')).toEqual(
      'https://www.segment.com?a=b&c=d'
    );
  });

  it('should remove multiple occurrences of the query param foo', () => {
    expect(removeFooFromUrl('https://www.segment.com?foo=bar&foo=baz')).toEqual(
      'https://www.segment.com'
    );
  });

  it('should remove `foo` but maintain the `?` delimeter if `foo` is first of many query parameters', () => {
    expect(removeFooFromUrl('https://www.segment.com?foo=bar&a=b')).toEqual(
      'https://www.segment.com?a=b'
    );
  });
});
