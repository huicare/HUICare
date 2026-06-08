<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
	<title></title>
	<meta name="generator" content="LibreOffice 7.6.0.3 (Windows)"/>
	<meta name="created" content="2026-06-08T04:13:17.881000000"/>
	<meta name="changed" content="2026-06-08T07:58:40.655000000"/>
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
{ supabase } from './supabaseClient';</font></font></h1>
<p style="font-weight: normal"><br/>
<br/>

</p>
<p style="font-weight: normal"><font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">export
const api = {</font></font></p>
<p style="font-weight: normal">  <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">//
Example: Fetch user profile</font></font></p>
<p style="font-weight: normal">  <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">getUserProfile:
async (userId) =&gt; {</font></font></p>
<p style="font-weight: normal">    <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">return
await supabase.from('profiles').select('*').eq('id',
userId).single();</font></font></p>
<p style="font-weight: normal">  <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">},</font></font></p>
<p style="font-weight: normal"><br/>
<br/>

</p>
<p style="font-weight: normal">  <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">//
Example: Submit a new order</font></font></p>
<p style="font-weight: normal">  <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">createOrder:
async (orderData) =&gt; {</font></font></p>
<p style="font-weight: normal">    <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">return
await supabase.from('orders').insert([orderData]);</font></font></p>
<p style="font-weight: normal">  <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">},</font></font></p>
<p style="font-weight: normal"><br/>
<br/>

</p>
<p style="font-weight: normal">  <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">//
Example: Subscribe to real-time updates</font></font></p>
<p style="font-weight: normal">  <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">subscribeToOrders:
(callback) =&gt; {</font></font></p>
<p style="font-weight: normal">    <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">return
supabase</font></font></p>
<p style="font-weight: normal">      <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">.channel('orders')</font></font></p>
<p style="font-weight: normal">      <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">.on('postgres_changes',
{ event: 'INSERT', schema: 'public', table: 'orders' }, callback)</font></font></p>
<p style="font-weight: normal">      <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">.subscribe();</font></font></p>
<p style="font-weight: normal">  <font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">}</font></font></p>
<p style="font-weight: normal"><font face="Times New Roman, serif"><font size="4" style="font-size: 14pt">};</font></font></p>
</body>
</html>