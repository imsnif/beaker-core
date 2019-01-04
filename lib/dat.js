exports.getBasicType = function (type) {
  if (type && Array.isArray(type)) {
    if (type.includes('user')) return 'user'
    if (type.includes('web-page')) return 'web-page'
    if (type.includes('file-share')) return 'file-share'
    if (type.includes('image-collection')) return 'image-collection'
  }
  return 'other'
}
