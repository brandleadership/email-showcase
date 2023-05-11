const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('header')
    .withIcon(Icon.TEXT)
    .withLabel('Header')
    .withFile(require('./template.twig'))
    .withParts(cx.part.image.withLabel('Logo'))
