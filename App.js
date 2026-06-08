<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
	<title></title>
	<meta name="generator" content="LibreOffice 7.6.0.3 (Windows)"/>
	<meta name="created" content="2026-06-08T04:13:17.881000000"/>
	<meta name="changed" content="2026-06-08T07:45:39.220000000"/>
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
{ BrowserRouter as Router, Routes, Route } from 'react-router-dom';</font></font></h1>
<p style="font-weight: normal"><font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">import
NavigationManager from './components/layout/NavigationManager';</font></font></p>
<p style="font-weight: normal"><br/>
<br/>

</p>
<p style="font-weight: normal"><font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">function
App() {</font></font></p>
<p style="font-weight: normal">  <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">const
user = { role: 'client' }; // Fetched from Auth Context</font></font></p>
<p style="font-weight: normal"><br/>
<br/>

</p>
<p style="font-weight: normal">  <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">return
(</font></font></p>
<p style="font-weight: normal">    <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;Router&gt;</font></font></p>
<p style="font-weight: normal">      <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;div
className=&quot;app-layout&quot;&gt;</font></font></p>
<p style="font-weight: normal">        <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;Routes&gt;</font></font></p>
<p style="font-weight: normal">          <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;Route
path=&quot;/client/*&quot; element={&lt;ClientDashboard /&gt;} /&gt;</font></font></p>
<p style="font-weight: normal">          <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;Route
path=&quot;/admin/*&quot; element={&lt;AdminDashboard /&gt;} /&gt;</font></font></p>
<p style="font-weight: normal">          <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">{/*
... other routes */}</font></font></p>
<p style="font-weight: normal">        <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;/Routes&gt;</font></font></p>
<p style="font-weight: normal">        <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;NavigationManager
role={user.role} /&gt;</font></font></p>
<p style="font-weight: normal">      <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;/div&gt;</font></font></p>
<p style="font-weight: normal">    <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;/Router&gt;</font></font></p>
<p style="font-weight: normal">  <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">);</font></font></p>
<p style="font-weight: normal"><font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">}</font></font></p>
</body>
</html>