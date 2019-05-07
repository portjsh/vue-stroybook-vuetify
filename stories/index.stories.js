/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyButton from './MyButton';
import Welcome from './Welcome';



import StatsCard from '../src/components/common/StatsCard.vue'
import StyleGuide from '../src/components/common/StyleGuide.vue'

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action('clicked') },
  }))
  .add('with JSX', () => ({
    components: { MyButton },
    // eslint-disable-next-line no-unused-vars
    render(h) {
      return <my-button onClick={this.action}>With JSX</my-button>;
    },
    methods: { action: linkTo('clicked') },
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action('clicked') },
  }));

  storiesOf('StatsCard', module)
  .add('stats-card default color', () => ({
    components: { StatsCard },
    template:
      '<v-container grid-list-xl fluid><v-layout row wrap><v-flex xs4><stats-card title="1.200" sub-title="assigned credits" icon="mdi-plus"/></v-flex></v-layout></v-container>'
  }))
  .add('stats-card green color', () => ({
    components: { StatsCard },
    template:
      '<v-container grid-list-xl fluid><v-layout row wrap><v-flex xs4><stats-card title="1.200" sub-title="assigned credits" color="green" icon="mdi-plus" /></v-flex></v-layout></v-container>'
  }))
  storiesOf('StyleGuide', module)
  .add('style-guide ', () => ({
    components: { StyleGuide },
    template:
      '<style-guide title="1.200" sub-title="assigned credits" icon="mdi-plus"/>'
  }))
  

/* eslint-enable react/react-in-jsx-scope */
