const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('two-col-text')
    .withIcon(Icon.TEXT)
    .withLabel('Two column Text')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText.withLabel('Text'),
        cx.part.formattedText
            .withLabel('Formatted Text')
            .withHtmlEditorConfig(
                require('../../../../../configs/text-configs/formatted-text-config')
            )
    )
