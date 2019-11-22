<template>
  <ArticleTemplate
    title="これはテストタイトルです"
    :contents="data"
  >

  </ArticleTemplate>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component({
    components: {
      ArticleTemplate: () => import('~/components/Templates/ArticleTemplate.vue')
    }
  })
  export default class Article extends Vue {
    data: string = '<div id="item-fe26e3ecb33000a6544e">\n' +
      '<h1>\n' +
      '<span id="誰も書かないような凡ミスをあえて書く" class="fragment"></span><a href="#%E8%AA%B0%E3%82%82%E6%9B%B8%E3%81%8B%E3%81%AA%E3%81%84%E3%82%88%E3%81%86%E3%81%AA%E5%87%A1%E3%83%9F%E3%82%B9%E3%82%92%E3%81%82%E3%81%88%E3%81%A6%E6%9B%B8%E3%81%8F"><i class="fa fa-link"></i></a>誰も書かないような凡ミスをあえて書く</h1>\n' +
      '\n' +
      '<p>Vue.jsめっちゃ好きなんですけど、最初の頃はググってもよくわからない変なミスでハマることがあったので、あえてそれを書いていこうと思います。</p>\n' +
      '\n' +
      '<p>ちなみにこの記事は<a href="https://gitpitch.com/fruitriin/slideshows/MyFailsOfTheVue#/" rel="nofollow noopener" target="_blank">私がハマったVue.jsのショボいミス - GitPitch</a> というLTで発表した内容を、整理した内容です。</p>\n' +
      '\n' +
      '<h2>\n' +
      '<span id="なんかよくわからんけど動かない20190422追記" class="fragment"></span><a href="#%E3%81%AA%E3%82%93%E3%81%8B%E3%82%88%E3%81%8F%E3%82%8F%E3%81%8B%E3%82%89%E3%82%93%E3%81%91%E3%81%A9%E5%8B%95%E3%81%8B%E3%81%AA%E3%81%8420190422%E8%BF%BD%E8%A8%98"><i class="fa fa-link"></i></a>なんかよくわからんけど動かない（2019/04/22追記）</h2>\n' +
      '\n' +
      '<p>ホットリロードがあるから大丈夫！と全面的に信用しないでください。<br>\n' +
      'リロードしたら直ることがあります。<br>\n' +
      '細かい理由は後述。</p>\n' +
      '\n' +
      '<h2>\n' +
      '<span id="ちょっといじったら突然画面いっぱいにエラーが表示された" class="fragment"></span><a href="#%E3%81%A1%E3%82%87%E3%81%A3%E3%81%A8%E3%81%84%E3%81%98%E3%81%A3%E3%81%9F%E3%82%89%E7%AA%81%E7%84%B6%E7%94%BB%E9%9D%A2%E3%81%84%E3%81%A3%E3%81%B1%E3%81%84%E3%81%AB%E3%82%A8%E3%83%A9%E3%83%BC%E3%81%8C%E8%A1%A8%E7%A4%BA%E3%81%95%E3%82%8C%E3%81%9F"><i class="fa fa-link"></i></a>ちょっといじったら突然画面いっぱいにエラーが表示された</h2>\n' +
      '\n' +
      '<p>デカいわ黒背景の白文字だわでビビりますが、落ち着いてメッセージを呼んでください。</p>\n' +
      '\n' +
      '<p>このオーバーレイはコンパイルエラーなので、どこかに間違いがあるはずです。<br>\n' +
      'そして、だいたいの場合はどこがエラーの原因なのかもちゃんと書いてあります。</p>\n' +
      '\n' +
      '<h2>\n' +
      '<span id="タグを足したらエラーになった" class="fragment"></span><a href="#%E3%82%BF%E3%82%B0%E3%82%92%E8%B6%B3%E3%81%97%E3%81%9F%E3%82%89%E3%82%A8%E3%83%A9%E3%83%BC%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%9F"><i class="fa fa-link"></i></a>タグを足したらエラーになった</h2>\n' +
      '\n' +
      '<p>タグを追加する場所が悪いとそうなります。</p>\n' +
      '\n' +
      '<div class="code-frame" data-lang="vue"><div class="highlight"><pre><span class="nt">&lt;</span><span class="k">template</span><span class="nt">&gt;</span>\n' +
      '  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hello"</span><span class="nt">&gt;</span>\n' +
      '  <span class="nt">&lt;/div&gt;</span>\n' +
      '  <span class="nt">&lt;div&gt;</span>\n' +
      '\n' +
      '  <span class="nt">&lt;/div&gt;</span>\n' +
      '<span class="nt">&lt;/</span><span class="k">template</span><span class="nt">&gt;</span>\n' +
      '</pre></div></div>\n' +
      '\n' +
      '<div class="code-frame" data-lang="console"><div class="highlight"><pre><span class="go">Failed to compile.\n' +
      '\n' +
      './node_modules/vue-loader/lib/template-compiler?{"id":"data-v-469af010","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&amp;index=0!./src/components/HelloWorld.vue\n' +
      '(Emitted value instead of an instance of Error) \n' +
      '  Error compiling template:\n' +
      '\n' +
      '</span><span class="gp">  &lt;div class="hello"&gt;</span>\n' +
      '<span class="gp">  &lt;/div&gt;</span>\n' +
      '<span class="gp">  &lt;div&gt;</span>\n' +
      '<span class="go">\n' +
      '</span><span class="gp">  &lt;/div&gt;</span>\n' +
      '<span class="go">\n' +
      '  - Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead.\n' +
      '\n' +
      ' @ ./src/components/HelloWorld.vue 11:0-366\n' +
      ' @ ./src/router/index.js\n' +
      ' @ ./src/main.js\n' +
      ' @ multi (webpack)-dev-server/client?http://localhost:8081 webpack/hot/dev-server ./src/main.js\n' +
      '</span></pre></div></div>\n' +
      '\n' +
      '<p>注目すべきは <code>Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead.</code> このメッセージですね。</p>\n' +
      '\n' +
      '<p>ルートエレメントは１個でなければなりません。</p>\n' +
      '\n' +
      '<h2>\n' +
      '<span id="mainコンポーネントがエラーになる" class="fragment"></span><a href="#main%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%8C%E3%82%A8%E3%83%A9%E3%83%BC%E3%81%AB%E3%81%AA%E3%82%8B"><i class="fa fa-link"></i></a>「Main」コンポーネントがエラーになる</h2>\n' +
      '\n' +
      '<p>Mainコンポーネントは作れません。<br>\n' +
      'なぜならHTML5に&lt;main&gt;タグがあるからです！</p>\n' +
      '\n' +
      '<div class="code-frame" data-lang="console"><div class="highlight"><pre><span class="go">[Vue warn]: Do not use built-in or reserved HTML elements as component id: main\n' +
      '</span></pre></div></div>\n' +
      '\n' +
      '<p>はい、メッセージにちゃんと予約されたエレメントですって出ますね。<br>\n' +
      '（私がハマった時はこのメッセージではなかったような？）</p>\n' +
      '\n' +
      '<p>同様の理由で、head, header, footer などのコンポーネントも作れないので気をつけてください。</p>\n' +
      '\n' +
      '<div class="code-frame" data-lang="vue"><div class="highlight"><pre><span class="nt">&lt;</span><span class="k">script</span><span class="nt">&gt;</span>\n' +
      '    <span class="k">export</span> <span class="k">default</span> <span class="p">{</span>\n' +
      '        <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">main</span><span class="dl">"</span> <span class="c1">//←アウト ＊Main.vueでnameを省略もアウト</span>\n' +
      '    <span class="p">}</span>\n' +
      '<span class="nt">&lt;/</span><span class="k">script</span><span class="nt">&gt;</span>\n' +
      '</pre></div></div>\n' +
      '\n' +
      '<p>そもそも論、Vue.jsのスタイルガイドに <code>コンポーネントの名前は２単語の組み合わせにしなければなりません</code> というものがあるので、そちらを守ればこんなことにはならないのですけど。</p>\n' +
      '\n' +
      '<h2>\n' +
      '<span id="絶対にあるはずのprops受け取り子コンポーネントが呼び出しがうまくいかない" class="fragment"></span><a href="#%E7%B5%B6%E5%AF%BE%E3%81%AB%E3%81%82%E3%82%8B%E3%81%AF%E3%81%9A%E3%81%AEprops%E5%8F%97%E3%81%91%E5%8F%96%E3%82%8A%E5%AD%90%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%8C%E5%91%BC%E3%81%B3%E5%87%BA%E3%81%97%E3%81%8C%E3%81%86%E3%81%BE%E3%81%8F%E3%81%84%E3%81%8B%E3%81%AA%E3%81%84"><i class="fa fa-link"></i></a>絶対にあるはずのprops受け取り/子コンポーネントが呼び出しがうまくいかない</h2>\n' +
      '\n' +
      '<p>「prop」「component」って書いてたとか、やらかしました。これらは複数形にすべきで、props, components が正しいですね。</p>\n' +
      '\n' +
      '<p>よくよく考えたら配列やオブジェクトとして受け取りますし。単数ではなく複数形です。</p>\n' +
      '\n' +
      '<p>地味になんのメッセージも出ないので、一度ハマるとなかなか気づけない罠ポイントかなと思っています。</p>\n' +
      '\n' +
      '<h2>\n' +
      '<span id="コンポーネントのマウントがうまくいかない20190422追記" class="fragment"></span><a href="#%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AE%E3%83%9E%E3%82%A6%E3%83%B3%E3%83%88%E3%81%8C%E3%81%86%E3%81%BE%E3%81%8F%E3%81%84%E3%81%8B%E3%81%AA%E3%81%8420190422%E8%BF%BD%E8%A8%98"><i class="fa fa-link"></i></a>コンポーネントのマウントがうまくいかない（2019/04/22追記）</h2>\n' +
      '\n' +
      '<p>import したコンポーネントのオブジェクトをそのまま渡してください。<br>\n' +
      'うっかり文字列で渡したりするとうまくマウントできません</p>\n' +
      '\n' +
      '<div class="code-frame" data-lang="vue">\n' +
      '<div class="code-lang"><span class="bold">fuga.vue</span></div>\n' +
      '<div class="highlight"><pre><span class="nt">&lt;</span><span class="k">script</span><span class="nt">&gt;</span>\n' +
      '<span class="k">import</span> <span class="nx">Hoge</span> <span class="k">from</span> <span class="dl">\'</span><span class="s1">~/Hoge.vue</span><span class="dl">\'</span>\n' +
      '\n' +
      '<span class="k">export</span> <span class="k">default</span><span class="p">{</span>\n' +
      '<span class="c1">//  components: [ \'Hoge\' ]  ←色々間違い</span>\n' +
      '  <span class="na">components</span><span class="p">:</span> <span class="p">{</span> <span class="nx">Hoge</span> <span class="p">}</span> <span class="c1">// ← importしたオブジェクトをマウント</span>\n' +
      '<span class="p">}</span>\n' +
      '<span class="nt">&lt;/</span><span class="k">script</span><span class="nt">&gt;</span>\n' +
      '</pre></div>\n' +
      '</div>\n' +
      '\n' +
      '<h2>\n' +
      '<span id="絶対にあるはずのメソッドがない" class="fragment"></span><a href="#%E7%B5%B6%E5%AF%BE%E3%81%AB%E3%81%82%E3%82%8B%E3%81%AF%E3%81%9A%E3%81%AE%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89%E3%81%8C%E3%81%AA%E3%81%84"><i class="fa fa-link"></i></a>絶対にあるはずのメソッドがない</h2>\n' +
      '\n' +
      '<p>前述の「method」にしてたパターンに加えて、ネストが間違ってて methods の下にいなかったことがあります。</p>\n' +
      '\n' +
      '<h2>\n' +
      '<span id="絶対にあるはずメソッドetcがないその２20190422追記" class="fragment"></span><a href="#%E7%B5%B6%E5%AF%BE%E3%81%AB%E3%81%82%E3%82%8B%E3%81%AF%E3%81%9A%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89etc%E3%81%8C%E3%81%AA%E3%81%84%E3%81%9D%E3%81%AE%EF%BC%9220190422%E8%BF%BD%E8%A8%98"><i class="fa fa-link"></i></a>絶対にあるはずメソッドetcがないその２（2019/04/22追記）</h2>\n' +
      '\n' +
      '<p>JavaScriptの監視機構の都合で新しいキーを追加した場合やファイルを追加した場合、そのことを検知できないことがあります。</p>\n' +
      '\n' +
      '<p>なので、Vueクラスに初めてmethodsを追加した場合などは<br>\n' +
      'おそらくmethodsが生えていることを感知できていない可能性があります。</p>\n' +
      '\n' +
      '<p>ということでリロードしてみましょう</p>\n' +
      '\n' +
      '<h2>\n' +
      '<span id="全部アロー関数にしたらハマった" class="fragment"></span><a href="#%E5%85%A8%E9%83%A8%E3%82%A2%E3%83%AD%E3%83%BC%E9%96%A2%E6%95%B0%E3%81%AB%E3%81%97%E3%81%9F%E3%82%89%E3%83%8F%E3%83%9E%E3%81%A3%E3%81%9F"><i class="fa fa-link"></i></a>全部アロー関数にしたらハマった</h2>\n' +
      '\n' +
      '<p>ES6系のシンタックス紹介記事で「どんどんアロー関数に置き換えよう」「普通のfunction() 定義とかもういらないし」みたいなノリの文章とかあるじゃないですか。<br>\n' +
      'だもんで私もやってみたんですよ。</p>\n' +
      '\n' +
      '<p>次のコードは、isShowの状態を切り替えて、v-ifを表示したり消したりしたいコンポーネントです。</p>\n' +
      '\n' +
      '<div class="code-frame" data-lang="vue">\n' +
      '<div class="code-lang"><span class="bold">hoge.vue</span></div>\n' +
      '<div class="highlight"><pre><span class="nt">&lt;</span><span class="k">template</span><span class="nt">&gt;</span>\n' +
      '    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"container"</span><span class="nt">&gt;</span>\n' +
      '        <span class="nt">&lt;button</span> <span class="na">v-on:click=</span><span class="s">"toggelShow"</span><span class="nt">&gt;</span>ボタン<span class="nt">&lt;/button&gt;</span>\n' +
      '        <span class="nt">&lt;p</span> <span class="na">v-if=</span><span class="s">"isShow"</span><span class="nt">&gt;</span>見えてる<span class="nt">&lt;/p&gt;</span>\n' +
      '    <span class="nt">&lt;/div&gt;</span>\n' +
      '<span class="nt">&lt;/</span><span class="k">template</span><span class="nt">&gt;</span>\n' +
      '\n' +
      '<span class="nt">&lt;</span><span class="k">script</span><span class="nt">&gt;</span>\n' +
      '    <span class="k">export</span> <span class="k">default</span> <span class="p">{</span>\n' +
      '        <span class="c1">//↓多分危険</span>\n' +
      '        <span class="na">data</span><span class="p">:</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="p">{</span>\n' +
      '            <span class="k">return</span> <span class="p">{</span>\n' +
      '                <span class="na">isShow</span> <span class="p">:</span> <span class="kc">true</span>\n' +
      '            <span class="p">}</span>\n' +
      '        <span class="p">},</span>\n' +
      '        <span class="na">methods</span> <span class="p">:</span> <span class="p">{</span>\n' +
      '          <span class="c1">//↓アウト</span>\n' +
      '          <span class="na">toggelShow</span><span class="p">:</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="p">{</span>\n' +
      '              <span class="k">this</span><span class="p">.</span><span class="nx">isShow</span> <span class="o">=</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">isShow</span><span class="p">;</span>\n' +
      '          <span class="p">}</span>\n' +
      '        <span class="p">},</span>\n' +
      '    <span class="p">}</span>\n' +
      '<span class="nt">&lt;/</span><span class="k">script</span><span class="nt">&gt;</span>\n' +
      '</pre></div>\n' +
      '</div>\n' +
      '\n' +
      '<p>実はこのコンポーネント、うまく動きません。<br>\n' +
      'というのも、 toggleShow をアロー関数にしたためthis = 親コンポーネントとか、windowとか指します！thisをこのコンポーネントに束縛していないのです！！</p>\n' +
      '\n' +
      '<p>data に関しても、thisを束縛していないので、propsで受け取った値をthis経由で参照しようとすると失敗するんじゃないかと思います。</p>\n' +
      '\n' +
      '<p>解消法は二通り。（下記のコード</p>\n' +
      '\n' +
      '<div class="code-frame" data-lang="vue">\n' +
      '<div class="code-lang"><span class="bold">hoge.vue</span></div>\n' +
      '<div class="highlight"><pre><span class="nt">&lt;</span><span class="k">script</span><span class="nt">&gt;</span>\n' +
      '    <span class="k">export</span> <span class="k">default</span> <span class="p">{</span>\n' +
      '        <span class="c1">//↓ES5までの記法</span>\n' +
      '        <span class="na">data</span><span class="p">:</span> <span class="kd">function</span><span class="p">()</span> <span class="o">=&gt;</span> <span class="p">{</span>\n' +
      '            <span class="k">return</span> <span class="p">{</span>\n' +
      '                <span class="na">isShow</span> <span class="p">:</span> <span class="kc">true</span>\n' +
      '            <span class="p">}</span>\n' +
      '        <span class="p">},</span>\n' +
      '        <span class="na">methods</span> <span class="p">:</span> <span class="p">{</span>\n' +
      '          <span class="c1">//↓オブジェクトのメソッド記法</span>\n' +
      '          <span class="nx">toggelShow</span><span class="p">()</span> <span class="p">{</span>\n' +
      '              <span class="k">this</span><span class="p">.</span><span class="nx">isShow</span> <span class="o">=</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">isShow</span><span class="p">;</span>\n' +
      '          <span class="p">}</span>\n' +
      '        <span class="p">},</span>\n' +
      '    <span class="p">}</span>\n' +
      '<span class="nt">&lt;/</span><span class="k">script</span><span class="nt">&gt;</span>\n' +
      '</pre></div>\n' +
      '</div>\n' +
      '\n' +
      '<p>従来どおりの「プロパティは関数ですよ」と定義するか、ES6シンタックスの「オブジェクトのメソッドですよ」と定義してあげればOKです。</p>\n' +
      '\n' +
      '<p>アロー関数の使い所は各種コールバックに使う、ですね。<br>\n' +
      'axiosやlodashのメソッド群のコールバックに使うとめっちゃ気持ちいいです。</p>\n' +
      '\n' +
      '<h2>\n' +
      '<span id="eslintがとんでもなくうざかったeslintを上手に活用したい" class="fragment"></span><a href="#eslint%E3%81%8C%E3%81%A8%E3%82%93%E3%81%A7%E3%82%82%E3%81%AA%E3%81%8F%E3%81%86%E3%81%96%E3%81%8B%E3%81%A3%E3%81%9Feslint%E3%82%92%E4%B8%8A%E6%89%8B%E3%81%AB%E6%B4%BB%E7%94%A8%E3%81%97%E3%81%9F%E3%81%84"><i class="fa fa-link"></i></a>ESLintがとんでもなくうざかった/ESLintを上手に活用したい</h2>\n' +
      '\n' +
      '<p>最近initしたプロジェクトではそんなこともなさそうですが、<br>\n' +
      '昔はルール違反なコードを書くとオーバーレイが全面を覆ってとんでもなかったです。</p>\n' +
      '\n' +
      '<div class="code-frame" data-lang="javascript">\n' +
      '<div class="code-lang"><span class="bold">config/index.js</span></div>\n' +
      '<div class="highlight"><pre>    <span class="c1">// Use Eslint Loader?</span>\n' +
      '    <span class="c1">// If true, your code will be linted during bundling and</span>\n' +
      '    <span class="c1">// linting errors and warnings will be shown in the console.</span>\n' +
      '    <span class="nx">useEslint</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span> <span class="c1">// ← falseにしましょう</span>\n' +
      '\n' +
      '    <span class="c1">// If true, eslint errors and warnings will also be shown in the error overlay</span>\n' +
      '    <span class="c1">// in the browser.</span>\n' +
      '    <span class="nx">showEslintErrorsInOverlay</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span> <span class="c1">// ← デフォルトtrueだったのかなぁ</span>\n' +
      '</pre></div>\n' +
      '</div>\n' +
      '\n' +
      '<p>ESLintにコードを修正してもらうには、<br>\n' +
      'package.json の scriptsの <code>lint</code> をチェックして、 <code>--fix</code> を加えたscriptを作りましょう。<br>\n' +
      'gitのpre commit hookとかに仕込むとさらによさげです。</p>\n' +
      '\n' +
      '<div class="code-frame" data-lang="json">\n' +
      '<div class="code-lang"><span class="bold">package.json</span></div>\n' +
      '<div class="highlight"><pre><span class="w">\n' +
      '</span><span class="err">scripts:</span><span class="w"> </span><span class="p">{</span><span class="w">\n' +
      '</span><span class="err">//前略</span><span class="w">\n' +
      '    </span><span class="nl">"lint"</span><span class="p">:</span><span class="w"> </span><span class="s2">"eslint --ext .js,.vue src "</span><span class="p">,</span><span class="w">\n' +
      '    </span><span class="nl">"fix"</span><span class="w"> </span><span class="p">:</span><span class="w"> </span><span class="s2">"eslint --fix --ext .js,.vue src"</span><span class="w">\n' +
      '</span><span class="err">//後略</span><span class="w">\n' +
      '</span><span class="p">}</span><span class="w">\n' +
      '</span></pre></div>\n' +
      '</div>\n' +
      '\n' +
      '<h2>\n' +
      '<span id="vueのを別のシンボルに置き換えたい20190422追記" class="fragment"></span><a href="#vue%E3%81%AE%E3%82%92%E5%88%A5%E3%81%AE%E3%82%B7%E3%83%B3%E3%83%9C%E3%83%AB%E3%81%AB%E7%BD%AE%E3%81%8D%E6%8F%9B%E3%81%88%E3%81%9F%E3%81%8420190422%E8%BF%BD%E8%A8%98"><i class="fa fa-link"></i></a>Vueの{{}}を別のシンボルに置き換えたい（2019/04/22追記）</h2>\n' +
      '\n' +
      '<p>テンプレートでの変数展開公文 <code>{{}}</code> mastacheですが、これは変更可能です。</p>\n' +
      '\n' +
      '<p><a href="https://jp.vuejs.org/v2/api/index.html#delimiters" rel="nofollow noopener" target="_blank">delimiters API — Vue.js</a></p>\n' +
      '\n' +
      '<p>もし、テンプレートエンジンの変数展開シンタックスと被った場合は、<br>\n' +
      '変更を考慮してもよいかもしれません。<br>\n' +
      '（言うまでもありませんが、テンプレートエンジンの変数展開シンタックスとどちらのシンボルを置き換えるかはプロジェクトによって最適な選択をしてください）</p>\n' +
      '\n' +
      '<h2>\n' +
      '<span id="ストアを追加したが読み込まない20190422追記" class="fragment"></span><a href="#%E3%82%B9%E3%83%88%E3%82%A2%E3%82%92%E8%BF%BD%E5%8A%A0%E3%81%97%E3%81%9F%E3%81%8C%E8%AA%AD%E3%81%BF%E8%BE%BC%E3%81%BE%E3%81%AA%E3%81%8420190422%E8%BF%BD%E8%A8%98"><i class="fa fa-link"></i></a>ストアを追加したが読み込まない（2019/04/22追記）</h2>\n' +
      '\n' +
      '<p>前述の監視機構の都合の話の追加です。<br>\n' +
      'storeを途中から追加した場合、そのファイルが読み込まれていないことがあります。<br>\n' +
      'こちらはwebpack上のファイル監視対象から漏れている可能性があります。<br>\n' +
      'この場合、npm run dev(npm run hot)などをやり直すことで初めて読み込まれるようになるので、気をつけてください。</p>\n' +
      '\n' +
      '<h2>\n' +
      '<span id="mapxxx-から値が参照できない20190422追記" class="fragment"></span><a href="#mapxxx-%E3%81%8B%E3%82%89%E5%80%A4%E3%81%8C%E5%8F%82%E7%85%A7%E3%81%A7%E3%81%8D%E3%81%AA%E3%81%8420190422%E8%BF%BD%E8%A8%98"><i class="fa fa-link"></i></a>mapXXX から値が参照できない（2019/04/22追記）</h2>\n' +
      '\n' +
      '<p>コンポーネントでmapXXXX()を使って参照する時の引数はString Arrayです。<br>\n' +
      'うっかり参照したいものが1個だからといってStringを渡したり、あるいは複数を参照したいからとString引数2個を渡したりしないようにしてください。呼び出せません。</p>\n' +
      '\n' +
      '<h2>\n' +
      '<span id="dispatch-mutationの時にpayloadの引き渡しがうまくいかない20190422追記" class="fragment"></span><a href="#dispatch-mutation%E3%81%AE%E6%99%82%E3%81%ABpayload%E3%81%AE%E5%BC%95%E3%81%8D%E6%B8%A1%E3%81%97%E3%81%8C%E3%81%86%E3%81%BE%E3%81%8F%E3%81%84%E3%81%8B%E3%81%AA%E3%81%8420190422%E8%BF%BD%E8%A8%98"><i class="fa fa-link"></i></a>dispatch, mutationの時にpayloadの引き渡しがうまくいかない（2019/04/22追記）</h2>\n' +
      '\n' +
      '<p>受け取りの型をオブジェクトにしてたら渡す時の型もオブジェクトにして引数を揃えてください。<br>\n' +
      '型が合ってないと値が渡せません</p>\n' +
      '\n' +
      '<h2>\n' +
      '<span id="余談サーバーサイドプロジェクトから見たvuejsとの付き合い方20190422追記" class="fragment"></span><a href="#%E4%BD%99%E8%AB%87%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%82%B5%E3%82%A4%E3%83%89%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%8B%E3%82%89%E8%A6%8B%E3%81%9Fvuejs%E3%81%A8%E3%81%AE%E4%BB%98%E3%81%8D%E5%90%88%E3%81%84%E6%96%B920190422%E8%BF%BD%E8%A8%98"><i class="fa fa-link"></i></a>（余談）サーバーサイドプロジェクトから見たVue.jsとの付き合い方（2019/04/22追記）</h2>\n' +
      '\n' +
      '<ul>\n' +
      '<li>SPAを考えるならVue(CLI)/NuxtのプロジェクトとAPIサーバーのプロジェクトの２つに分けるほうがだいたい楽</li>\n' +
      '<li>サーバーサイドのルーティングとSPA（フロントのルーティング）が両方あると世界が崩壊するのでやってはいけない</li>\n' +
      '<li>SPAでOGPやSEOを考えるならSSRができるNuxtのUniversalモードを選ぶべき</li>\n' +
      '<li>中規模開発くらいになると色々規約に乗っかれて開発できるNuxtが楽だと思う</li>\n' +
      '<li>小規模開発かつOGPやSEOを気にしなくていいならVueCLIで構築したプロジェクトのほうが考えること少なくて楽かも</li>\n' +
      '<li>中規模か小規模かの分水嶺は個人的にはVuex使かどうかだと思っていて、ページをまたいで状態を管理したいならNuxtでいいんじゃない？って思っている（諸説あります）</li>\n' +
      '</ul>\n' +
      '\n' +
      '<p>↑↑↑ここまでSPA開発の話↑↑↑<br>\n' +
      '↓↓↓ここからテンプレートエンジンでHTMLをレンダリングする世界の話↓↓↓</p>\n' +
      '\n' +
      '<ul>\n' +
      '<li>サーバーサイド言語のテンプレートエンジンに部分的にVueを導入することもできる（むしろチュートリアルではこの方法で紹介している）</li>\n' +
      '<li>ごく小規模なら単一ファイルコンポーネント（.vueファイル）を使わない開発の方が小回りが効いていいかも</li>\n' +
      '<li>もしくはLaravelMixで単一ファイルコンポーネントとテンプレートエンジンの世界を両立する</li>\n' +
      '<li>別途CLIで作ったプロジェクトを作って、buildした結果をサーバーサイドプロジェクトに展開して利用するという方法はありかもなぁ</li>\n' +
      '<li>vue-routerを使うときはよく考えること</li>\n' +
      '</ul>\n' +
      '\n' +
      '<h1>\n' +
      '<span id="まとめ" class="fragment"></span><a href="#%E3%81%BE%E3%81%A8%E3%82%81"><i class="fa fa-link"></i></a>まとめ</h1>\n' +
      '\n' +
      '<p>以上が私の記憶の限りのハマりどころになります。<br>\n' +
      'ううーん、始めた頃の記憶をもうあんまり覚えてない。</p>\n' +
      '\n' +
      '<p>ということで、「こんなところにハマったよ！」などなどあればコメントいただければ嬉しいなと思います。</p>\n' +
      '\n' +
      '<h3>\n' +
      '<span id="こんな記事も書いてます" class="fragment"></span><a href="#%E3%81%93%E3%82%93%E3%81%AA%E8%A8%98%E4%BA%8B%E3%82%82%E6%9B%B8%E3%81%84%E3%81%A6%E3%81%BE%E3%81%99"><i class="fa fa-link"></i></a>こんな記事も書いてます</h3>\n' +
      '\n' +
      '<ul>\n' +
      '<li><a href="https://qiita.com/fruitriin/items/dcb8fdad117591c0f402" id="reference-2d382206c1c42c476878">初めてVue.jsに触れた頃の私へ今の私が伝えたいTips プロジェクト作成編 - Qiita</a></li>\n' +
      '<li><a href="https://qiita.com/fruitriin/items/16b4542467e15ba82078" id="reference-aecebcd20327189fa277">初めてVue.jsに触れた頃の私へ今の私が伝えたいTips コンポーネント分割/ライブラリ選択編 - Qiita</a></li>\n' +
      '<li><a href="https://qiita.com/fruitriin/items/e0f2c9aa035c3ff2c874" id="reference-fd7c746e9a7dd1d8e39c">LaravelからVue.jsを使う最短レシピ - Qiita</a></li>\n' +
      '</ul>\n' +
      '</div>'
  }
</script>

<style scoped>

</style>
