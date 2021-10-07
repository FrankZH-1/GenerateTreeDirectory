<template>
  <div class="article-container">
    <article v-html="article"></article>
  </div>
</template>
<script lang="ts">
export default {
  data: function () {
    return {
      article:
        '<h1 id="准备阶段">准备阶段</h1> \
<h2 id="规范制定">规范制定</h2> \
<h3 id="代码规范">代码规范</h3> \
<p>使用 eslint 进行规范化</p> \
<h3 id="提交规范">提交规范</h3> \
<p><code>git commit</code>采用 angular 规范,即</p> \
<pre><code>&lt;type&gt;(&lt;scope&gt;): &lt;subject&gt; \
&lt;BLANK LINE&gt; \
&lt;body&gt; \
&lt;BLANK LINE&gt; \
&lt;footer&gt \
</code></pre> \
<h4 id="页眉">页眉</h4> \
<p>页眉的格式指定为提交类型(type)、作用域(scope，可选)和主题(subject)</p> \
<h5 id="提交类型">提交类型</h5> \
<ol> \
<li>build：对构建系统或者外部依赖项进行了修改</li> \
<li>ci：对 CI 配置文件或脚本进行了修改</li> \
<li>docs：对文档进行了修改</li> \
<li>feat：增加新的特征</li> \
<li>fix：修复 bug</li> \
<li>pref：提高性能的代码更改</li> \
<li>refactor：既不是修复 bug 也不是添加特征的代码重构</li> \
<li>style：不影响代码含义的修改，比如空格、格式化、缺失的分号等</li> \
<li>test：增加确实的测试或者矫正已存在的测试</li> \
</ol> \
<h5 id="作用域">作用域</h5> \
<p>范围可以是任何指定提交更改位置的内容</p> \
<h5 id="主题">主题</h5> \
<p>主题包括了对本次修改的简洁描述，有以下准则</p> \
<ol> \
<li>使用命令式，现在时态：“改变”不是“已改变”也不是“改变了”</li> \
<li>不要大写首字母</li> \
<li>不在末尾添加句号</li> \
</ol> \
<h4 id="正文设置">正文设置</h4> \
<p>和主题设置类似，使用命令式、现在时态</p> \
<p>应该包含修改的动机以及和之前行为的对比</p> \
<h4 id="页脚">页脚</h4> \
<h5 id="breaking-changes">Breaking changes</h5> \
<p>不兼容修改指的是本次提交修改了不兼容之前版本的 API 或者环境变量</p> \
<p>所有不兼容修改都必须在页脚中作为中断更改块提到，以 BREAKING CHANGE:开头，后跟一个空格或者两个换行符，其余的信息就是对此次修改的描述，修改的理由和修改注释</p> \
<pre><code>BREAKING CHANGE: isolate scope bindings definition has changed and \
    the inject option for the directive controller injection was removed. \
    To migrate the code follow the example below: \
    Before: \
    。。。 \
    。。。 \
    After: \
    。。。 \
    。。。 \
    The removed `inject` wasn&#39;t generaly useful for directives so there should be no code using it. \
</code></pre> \
<h5 id="引用提交的问题">引用提交的问题</h5> \
<p>如果本次提交目的是修改 issue 的话，需要在页脚引用该 issue</p> \
<p>以关键字 Closes 开头，比如</p> \
<p><code>Closes #234</code></p> \
<p>如果修改了多个 bug，以逗号隔开</p> \
<p><code>Closes #123, #245, #992</code></p> \
<h4 id="回滚设置">回滚设置</h4> \
<p>当此次提交包含回滚(<code>revert</code>)操作，那么页眉以&quot;<code>revert</code>:&quot;开头，同时在正文中添加<code>&quot;This reverts commit hash&quot;</code>，其中<code>hash</code>值表示被回滚前的提交</p> \
<pre><code>revert:&lt;type&gt;(&lt;scope&gt;): &lt;subject&gt; \
&lt;BLANK LINE&gt; \
This reverts commit hash \
&lt;other-body&gt; \
&lt;BLANK LINE&gt; \
&lt;footer&gt; \
</code></pre> \
<h3 id="api-文档">api 文档</h3> \
<p>使用<code>apidoc</code>生成 api 文档</p> \
<h3 id="语义化版本控制">语义化版本控制</h3> \
<h2 id="框架选择">框架选择</h2> \
<h3 id="express">express</h3> \
<h3 id="koa">koa</h3> \
<h3 id="egg">egg</h3> \
<h3 id="nest">nest</h3>',
    };
  },
};
</script>
<style scoped>
.article-container {
  text-align: left;
}
</style>