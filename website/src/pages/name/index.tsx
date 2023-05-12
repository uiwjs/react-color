import Markdown from '../../components/Markdown';

export class Component extends Markdown {
  editorUrl = '/packages/color-name/README.md';
  getMdStr = () => import('@uiw/react-color-name/README.md');
}
