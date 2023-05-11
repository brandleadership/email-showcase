const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('header-option-two')
    .withIcon(Icon.TEXT)
    .withLabel('Header Option Two')
    .withFile(require('./template.twig'))
    .withParts(cx.part.image.withLabel('Image'), cx.part.link.withLabel('Link'))
