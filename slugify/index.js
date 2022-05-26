const slugify = (string) =>
  string
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')

const string = 'This is a long text:'
console.log(string, slugify(string)) // 'this-is-a-long-text'
