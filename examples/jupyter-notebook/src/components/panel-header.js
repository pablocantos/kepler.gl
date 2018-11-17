import {PanelHeaderFactory, Icons} from 'kepler.gl/components';

const KEPLER_DOC = 'https://github.com/uber/kepler.gl/blob/master/docs/a-introduction.md';

export function CustomPanelHeaderFactory() {
  const PanelHeader = PanelHeaderFactory();

  PanelHeader.defaultProps = {
    ...PanelHeader.defaultProps,
    actionItems: [
      {
        id: 'docs',
        label: 'Docs',
        iconComponent: Icons.Docs,
        href: KEPLER_DOC,
        blank: true,
        tooltip: 'Documentation',
        onClick: () => {}
      }
    ]
  };
  return PanelHeader;
}

export default CustomPanelHeaderFactory;
