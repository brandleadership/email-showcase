const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('image-left-two-col')
    .withIcon(Icon.TEXT)
    .withLabel('Image Left Section')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.image.withLabel('Text'),
        cx.part.plainText.withLabel('Text'),
        cx.part.formattedText
            .withLabel('Formatted Text')
            .withHtmlEditorConfig(
                require('../../../../../configs/text-configs/formatted-text-config')
            ),
        cx.part.link.withLabel('Button Link')
    )
