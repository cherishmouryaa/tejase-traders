import "./Certificates.css";

function Certificates() {

const certs = [
{
name:"Importer Exporter Code (IEC)",
file:"/certificates/IEC.pdf",
desc:"Government issued export authorization."
},
{
name:"GST Registration",
file:"/certificates/GST REG.pdf",
desc:"Registered Indian business compliance."
},
{
name:"FSSAI Central License",
file:"/certificates/FSSAI CENTRAL lic.pdf",
desc:"Licensed for food trade and export."
}
];

return(
<div className="cert-page">

<div className="trust-strip">
IEC Certified • GST Registered • FSSAI Licensed
</div>

<h1>Global Compliance & Export Certifications</h1>

<p className="cert-intro">
Tejase Traders operates under verified export, tax and food compliance standards ensuring trusted global trade.
</p>

<div className="compliance-badges">
<div>✔ Government Verified</div>
<div>✔ Export Compliant</div>
<div>✔ Food Safety Certified</div>
</div>

<div className="cert-stats">
<div>
<h2>3+</h2>
<p>Active Certifications</p>
</div>

<div>
<h2>100%</h2>
<p>Compliance Verified</p>
</div>

<div>
<h2>Global</h2>
<p>Export Ready</p>
</div>
</div>

<div className="cert-grid">

{certs.map((c,i)=>(

<div key={i} className="cert-card">

<div className="cert-icon">
🏅
</div>

<span className="verified-badge">
Verified
</span>

<h3>{c.name}</h3>

<p>{c.desc}</p>

<div className="pdf-preview">
<iframe
src={c.file}
title={c.name}
/>
</div>

<a
href={c.file}
target="_blank"
rel="noreferrer"
>
View Full Document
</a>

</div>

))}

</div>

</div>
);
}

export default Certificates;