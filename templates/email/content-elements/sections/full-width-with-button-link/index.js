const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('full-width-with-button-link')
    .withIcon(Icon.TEXT)
    .withLabel('Full Width Section With Button Link')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.formattedText.withLabel('Formatted Text'),
        cx.part.formattedText
            .withLabel('Formatted Text')
            .withHtmlEditorConfig(
                require('../../../../../configs/text-configs/formatted-text-config')
            ),
        cx.part.link.withLabel('Button Link')
    )
