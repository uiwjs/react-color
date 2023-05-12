import Markdown from '../../components/Markdown';

export class Component extends Markdown {
  editorUrl = '/packages/color-convert/README.md';
  getMdStr = () => import('@uiw/color-convert/README.md');
}
