const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('full-width-image-title-text')
    .withIcon(Icon.LIST)
    .withLabel('Full Width Image and Title and Text')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.image.withLabel('Image'),
        cx.part.plainText.withLabel('Text'),
        cx.part.formattedText
            .withLabel('Formatted Text')
            .withHtmlEditorConfig(
                require('../../../../../configs/text-configs/formatted-text-config')
            )
    )
