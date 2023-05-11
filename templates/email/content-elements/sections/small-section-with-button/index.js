const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('small-section-with-button')
    .withIcon(Icon.TEXT)
    .withLabel('Small Section With Button')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText.withLabel('Text'),
        cx.part.plainText.withLabel('Text'),
        cx.part.link.withLabel('Link')
    )
