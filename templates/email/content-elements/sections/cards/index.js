const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('cards')
    .withIcon(Icon.CHAIN)
    .withLabel('Cards')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.image.withLabel('Image'),
        cx.part.plainText.withLabel('Text'),
        cx.part.plainText.withLabel('Text'),
        cx.part.plainText.withLabel('Text'),
        cx.part.plainText.withLabel('Text'),
        cx.part.link.withLabel('Link'),
        cx.part.image.withLabel('Image'),
        cx.part.plainText.withLabel('Text'),
        cx.part.plainText.withLabel('Text'),
        cx.part.plainText.withLabel('Text'),
        cx.part.plainText.withLabel('Text'),
        cx.part.link.withLabel('Link')
    )
