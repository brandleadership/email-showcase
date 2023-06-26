const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('feedback-rating')
    .withIcon(Icon.TEXT)
    .withLabel('Feedback rating')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText.withLabel('Text'),
        cx.part.plainText.withLabel('Text'),
        cx.part.plainText.withLabel('Text'),
        cx.part.plainText.withLabel('Text'),
        cx.part.plainText.withLabel('Text'),
        cx.part.plainText.withLabel('Text')
    )
