<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
	<title></title>
	<meta name="generator" content="LibreOffice 7.6.0.3 (Windows)"/>
	<meta name="created" content="2026-06-08T04:13:17.881000000"/>
	<meta name="changed" content="2026-06-08T07:18:09.346000000"/>
	<style type="text/css">
		@page { size: 8.5in 11in; margin: 0.79in }
		p { line-height: 115%; margin-bottom: 0.1in; background: transparent }
		h1 { margin-bottom: 0.08in; background: transparent; page-break-after: avoid }
		h1.western { font-family: "Liberation Serif", serif; font-size: 24pt; font-weight: bold }
		h1.cjk { font-family: "NSimSun"; font-size: 24pt; font-weight: bold }
		h1.ctl { font-family: "Arial"; font-size: 24pt; font-weight: bold }
		strong { font-weight: bold }
		a:link { color: #000080; text-decoration: underline }
		a:visited { color: #800000; text-decoration: underline }
	</style>
</head>
<body lang="en-US" link="#000080" vlink="#800000" dir="ltr"><h1 class="western" style="font-weight: normal">
<font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">import
React from 'react';</font></font></h1>
<p style="font-weight: normal"><br/>
<br/>

</p>
<p style="font-weight: normal"><font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">const
servicesData = [</font></font></p>
<p style="font-weight: normal">  <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">{
unit: &quot;Academic Solutions&quot;, items: [&quot;Assignment
Typing&quot;, &quot;Research Support&quot;, &quot;CBT Registration&quot;]
},</font></font></p>
<p style="font-weight: normal">  <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">{
unit: &quot;Print &amp; Documentation&quot;, items: [&quot;Bulk
Printing&quot;, &quot;Spiral Binding&quot;, &quot;PDF Conversion&quot;]
},</font></font></p>
<p style="font-weight: normal">  <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">{
unit: &quot;Creative Design&quot;, items: [&quot;Logo Design&quot;,
&quot;Brand Identity&quot;, &quot;Social Media Ads&quot;] },</font></font></p>
<p style="font-weight: normal">  <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">//
... add remaining units</font></font></p>
<p style="font-weight: normal"><font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">];</font></font></p>
<p style="font-weight: normal"><br/>
<br/>

</p>
<p style="font-weight: normal"><font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">const
ServiceCatalog = () =&gt; {</font></font></p>
<p style="font-weight: normal">  <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">return
(</font></font></p>
<p style="font-weight: normal">    <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;div
className=&quot;catalog-container&quot;&gt;</font></font></p>
<p style="font-weight: normal">      <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;h1&gt;HUIC
Service Catalog&lt;/h1&gt;</font></font></p>
<p style="font-weight: normal">      <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">{servicesData.map((section,
index) =&gt; (</font></font></p>
<p style="font-weight: normal">        <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;div
key={index} className=&quot;service-unit&quot;&gt;</font></font></p>
<p style="font-weight: normal">          <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;h2&gt;{section.unit}&lt;/h2&gt;</font></font></p>
<p style="font-weight: normal">          <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;ul&gt;</font></font></p>
<p style="font-weight: normal">            <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">{section.items.map((item,
i) =&gt; &lt;li key={i}&gt;{item}&lt;/li&gt;)}</font></font></p>
<p style="font-weight: normal">          <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;/ul&gt;</font></font></p>
<p style="font-weight: normal">        <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;/div&gt;</font></font></p>
<p style="font-weight: normal">      <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">))}</font></font></p>
<p style="font-weight: normal">    <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;/div&gt;</font></font></p>
<p style="font-weight: normal">  <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">);</font></font></p>
<p style="font-weight: normal"><font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">};</font></font></p>
<p style="font-weight: normal"><br/>
<br/>

</p>
<p style="font-weight: normal"><font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">export
default ServiceCatalog;</font></font></p>
</body>
</html>