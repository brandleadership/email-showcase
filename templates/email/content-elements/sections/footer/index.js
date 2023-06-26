const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('footer')
    .withIcon(Icon.TEXT)
    .withLabel('Footer')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.image.withLabel('Image'),
        cx.part.plainText.withLabel('Text'),
        cx.part.plainText.withLabel('Text'),
        cx.part.plainText.withLabel('Text'),
        cx.part.image.withLabel('Image'),
        cx.part.image.withLabel('Image'),
        cx.part.image.withLabel('Image'),
        cx.part.image.withLabel('Image')
    )
