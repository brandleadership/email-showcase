const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('hero')
    .withIcon(Icon.TEXT)
    .withLabel('Hero')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText.withLabel('Text'),
        cx.part.formattedText
            .withLabel('Formatted Text')
            .withHtmlEditorConfig(
                require('../../../../../configs/text-configs/formatted-text-config')
            ),
        cx.part.link.withLabel('Button Link')
    )
