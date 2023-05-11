const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('footer-stores')
    .withIcon(Icon.TEXT)
    .withLabel('Footer Stores')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText.withLabel('Text'),
        cx.part.plainText.withLabel('Text'),
        cx.part.plainText.withLabel('Text')
    )
