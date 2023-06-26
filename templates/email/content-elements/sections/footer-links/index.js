const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('footer-links')
    .withIcon(Icon.TEXT)
    .withLabel('Footer Links')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.link.withLabel('Link'),
        cx.part.link.withLabel('Link'),
        cx.part.link.withLabel('Link')
    )
