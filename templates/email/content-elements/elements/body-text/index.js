const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('body-text')
    .withIcon(Icon.TEXT)
    .withLabel('body-text')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.formattedText
            .withLabel('Text With Configurations')
            .withHtmlEditorConfig(
                require('../../../../../configs/text-configs/formatted-text-config')
            )
    )
