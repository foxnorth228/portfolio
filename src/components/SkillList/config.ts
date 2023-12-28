import { ISkillElem } from '@components/SkillList/types.ts';

const config = {
  skills: [
    { path: 'html.svg', title: 'html' },
    { path: 'git.svg', title: 'git' },
    { path: 'css.svg', title: 'css' },
    { path: 'npm.svg', title: 'npm' },
    { path: 'js.svg', title: 'javascript' },
    { path: 'webpack.svg', title: 'webpack' },
    { path: 'ts.svg', title: 'typescript' },
    { path: 'sass.svg', title: 'SASS' },
    { path: 'react.svg', title: 'react' },
  ] as ISkillElem[],
};

for (let i = 0; i < config.skills.length; ++i) {
  config.skills[i].path = 'skills/' + config.skills[i].path;
  config.skills[i].alt = config.skills[i].title + '-svg';
}

export default config;
