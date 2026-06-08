<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
	<title></title>
	<meta name="generator" content="LibreOffice 7.6.0.3 (Windows)"/>
	<meta name="created" content="2026-06-08T04:13:17.881000000"/>
	<meta name="changed" content="2026-06-08T07:36:52.450000000"/>
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
React, { useState, useEffect } from 'react';</font></font></h1>
<p style="font-weight: normal"><font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">import
{ supabase } from '../../services/supabaseClient';</font></font></p>
<p style="font-weight: normal"><br/>
<br/>

</p>
<p style="font-weight: normal"><font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">const
AmbassadorDashboard = () =&gt; {</font></font></p>
<p style="font-weight: normal">  <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">const
[metrics, setMetrics] = useState({ clicks: 0, signups: 0, earnings: 0
});</font></font></p>
<p style="font-weight: normal">  <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">const
[refLink] =
useState(`https://huicare.vercel.app/register?ref=${localStorage.getItem('userId')}`);</font></font></p>
<p style="font-weight: normal"><br/>
<br/>

</p>
<p style="font-weight: normal">  <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">const
copyToClipboard = () =&gt; {</font></font></p>
<p style="font-weight: normal">   
<font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">navigator.clipboard.writeText(refLink);</font></font></p>
<p style="font-weight: normal">    <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">alert('Referral
link copied!');</font></font></p>
<p style="font-weight: normal">  <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">};</font></font></p>
<p style="font-weight: normal"><br/>
<br/>

</p>
<p style="font-weight: normal">  <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">useEffect(()
=&gt; {</font></font></p>
<p style="font-weight: normal">    <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">const
fetchAnalytics = async () =&gt; {</font></font></p>
<p style="font-weight: normal">      <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">const
{ data } = await supabase</font></font></p>
<p style="font-weight: normal">        <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">.from('referral_analytics')</font></font></p>
<p style="font-weight: normal">        <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">.select('clicks,
signups, earnings')</font></font></p>
<p style="font-weight: normal">        <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">.eq('ambassador_id',
localStorage.getItem('userId'))</font></font></p>
<p style="font-weight: normal">        <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">.single();</font></font></p>
<p style="font-weight: normal">      <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">if
(data) setMetrics(data);</font></font></p>
<p style="font-weight: normal">    <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">};</font></font></p>
<p style="font-weight: normal">    <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">fetchAnalytics();</font></font></p>
<p style="font-weight: normal">  <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">},
[]);</font></font></p>
<p style="font-weight: normal"><br/>
<br/>

</p>
<p style="font-weight: normal">  <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">return
(</font></font></p>
<p style="font-weight: normal">    <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;div
className=&quot;ambassador-page&quot;&gt;</font></font></p>
<p style="font-weight: normal">      <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;h1&gt;Ambassador
Hub&lt;/h1&gt;</font></font></p>
<p style="font-weight: normal">      
</p>
<p style="font-weight: normal">      <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;div
className=&quot;ref-link-card&quot;&gt;</font></font></p>
<p style="font-weight: normal">        <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;h3&gt;Your
Referral Link&lt;/h3&gt;</font></font></p>
<p style="font-weight: normal">        <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;p
className=&quot;link-text&quot;&gt;{refLink}&lt;/p&gt;</font></font></p>
<p style="font-weight: normal">        <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;button
className=&quot;btn-primary&quot; onClick={copyToClipboard}&gt;Copy
Link&lt;/button&gt;</font></font></p>
<p style="font-weight: normal">      <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;/div&gt;</font></font></p>
<p style="font-weight: normal"><br/>
<br/>

</p>
<p style="font-weight: normal">      <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;div
className=&quot;analytics-grid&quot;&gt;</font></font></p>
<p style="font-weight: normal">        <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;div
className=&quot;stat-box&quot;&gt;&lt;h4&gt;Clicks&lt;/h4&gt;&lt;p&gt;{metrics.clicks}&lt;/p&gt;&lt;/div&gt;</font></font></p>
<p style="font-weight: normal">        <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;div
className=&quot;stat-box&quot;&gt;&lt;h4&gt;Signups&lt;/h4&gt;&lt;p&gt;{metrics.signups}&lt;/p&gt;&lt;/div&gt;</font></font></p>
<p style="font-weight: normal">        <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;div
className=&quot;stat-box&quot;&gt;&lt;h4&gt;Earnings&lt;/h4&gt;&lt;p&gt;₦{metrics.earnings}&lt;/p&gt;&lt;/div&gt;</font></font></p>
<p style="font-weight: normal">      <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;/div&gt;</font></font></p>
<p style="font-weight: normal">    <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;/div&gt;</font></font></p>
<p style="font-weight: normal">  <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">);</font></font></p>
<p style="font-weight: normal"><font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">};</font></font></p>
<p style="font-weight: normal"><br/>
<br/>

</p>
<p style="font-weight: normal"><font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">export
default AmbassadorDashboard;</font></font></p>
</body>
</html>