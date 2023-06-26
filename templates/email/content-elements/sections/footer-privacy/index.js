const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('footer-privacy')
    .withIcon(Icon.TEXT)
    .withLabel('Footer Privacy')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText.withLabel('Text'),
        cx.part.link.withLabel('Link'),
        cx.part.link.withLabel('Link')
    )
