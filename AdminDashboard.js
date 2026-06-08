<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
	<title></title>
	<meta name="generator" content="LibreOffice 7.6.0.3 (Windows)"/>
	<meta name="created" content="2026-06-08T04:13:17.881000000"/>
	<meta name="changed" content="2026-06-08T07:39:10.317000000"/>
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
React, { useEffect, useState } from 'react';</font></font></h1>
<p style="font-weight: normal"><font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">import
{ supabase } from '../../services/supabaseClient';</font></font></p>
<p style="font-weight: normal"><br/>
<br/>

</p>
<p style="font-weight: normal"><font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">const
AdminDashboard = () =&gt; {</font></font></p>
<p style="font-weight: normal">  <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">const
[stats, setStats] = useState({ revenue: 0, users: 0, orders: 0 });</font></font></p>
<p style="font-weight: normal"><br/>
<br/>

</p>
<p style="font-weight: normal">  <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">useEffect(()
=&gt; {</font></font></p>
<p style="font-weight: normal">    <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">const
fetchAdminStats = async () =&gt; {</font></font></p>
<p style="font-weight: normal">      <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">//
Example: Using Supabase RPC or direct aggregate queries</font></font></p>
<p style="font-weight: normal">      <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">const
{ data: users } = await supabase.from('profiles').select('id', {
count: 'exact' });</font></font></p>
<p style="font-weight: normal">      <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">const
{ data: orders } = await supabase.from('orders').select('id', {
count: 'exact' });</font></font></p>
<p style="font-weight: normal">      
</p>
<p style="font-weight: normal">      <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">setStats({</font></font></p>
<p style="font-weight: normal">        <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">users:
users?.length || 0,</font></font></p>
<p style="font-weight: normal">        <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">orders:
orders?.length || 0,</font></font></p>
<p style="font-weight: normal">        <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">revenue:
'₦2.5M' // Mocked aggregate data</font></font></p>
<p style="font-weight: normal">      <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">});</font></font></p>
<p style="font-weight: normal">    <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">};</font></font></p>
<p style="font-weight: normal">    <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">fetchAdminStats();</font></font></p>
<p style="font-weight: normal">  <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">},
[]);</font></font></p>
<p style="font-weight: normal"><br/>
<br/>

</p>
<p style="font-weight: normal">  <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">return
(</font></font></p>
<p style="font-weight: normal">    <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;div
className=&quot;admin-container&quot;&gt;</font></font></p>
<p style="font-weight: normal">      <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;h1&gt;Admin
Overview&lt;/h1&gt;</font></font></p>
<p style="font-weight: normal">      <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;div
className=&quot;admin-grid&quot;&gt;</font></font></p>
<p style="font-weight: normal">        <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;div
className=&quot;stat-card&quot;&gt;&lt;h3&gt;Total
Revenue&lt;/h3&gt;&lt;p&gt;{stats.revenue}&lt;/p&gt;&lt;/div&gt;</font></font></p>
<p style="font-weight: normal">        <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;div
className=&quot;stat-card&quot;&gt;&lt;h3&gt;Total
Users&lt;/h3&gt;&lt;p&gt;{stats.users}&lt;/p&gt;&lt;/div&gt;</font></font></p>
<p style="font-weight: normal">        <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;div
className=&quot;stat-card&quot;&gt;&lt;h3&gt;Active
Orders&lt;/h3&gt;&lt;p&gt;{stats.orders}&lt;/p&gt;&lt;/div&gt;</font></font></p>
<p style="font-weight: normal">      <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;/div&gt;</font></font></p>
<p style="font-weight: normal">      
</p>
<p style="font-weight: normal">      <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;section
className=&quot;admin-management&quot;&gt;</font></font></p>
<p style="font-weight: normal">        <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;h2&gt;User
Management&lt;/h2&gt;</font></font></p>
<p style="font-weight: normal">        <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">{/*
Table component for Approving/Suspending users */}</font></font></p>
<p style="font-weight: normal">      <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;/section&gt;</font></font></p>
<p style="font-weight: normal">    <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">&lt;/div&gt;</font></font></p>
<p style="font-weight: normal">  <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">);</font></font></p>
<p style="font-weight: normal"><font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">};</font></font></p>
<p style="font-weight: normal"><br/>
<br/>

</p>
<p style="font-weight: normal"><font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">export
default AdminDashboard;</font></font></p>
</body>
</html>