import React, { useState } from 'react';

function ArticleForm() {
  const [id, setId] = useState('');
  const [designation, setDesignation] = useState('');
  const [prix, setPrix] = useState('');
  const [articles, setArticles] = useState([
    { id: 1, designation: 'Article 1', prix: 120 },
    { id: 2, designation: 'Article 2', prix: 233 },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // التحقق من ملء الحقول
    if (!id || !designation || !prix) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    // تحويل id و prix إلى أرقام
    const newArticle = {
      id: parseInt(id),
      designation,
      prix: parseFloat(prix),
    };

    // إضافة المقال إلى القائمة
    setArticles([...articles, newArticle]);

    // إعادة تعيين الحقول
    setId('');
    setDesignation('');
    setPrix('');
  };

  return (
    <div style={{ backgroundColor: '#fdecef', padding: '40px', width: '400px', margin: 'auto' }}>
      <h2>Ajout d'un Article</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Id: </label>
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </div>
        <div>
          <label>designation: </label>
          <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} />
        </div>
        <div>
          <label>prix: </label>
          <input type="text" value={prix} onChange={(e) => setPrix(e.target.value)} />
        </div>
        <div style={{ marginTop: '10px' }}>
          <button type="submit">Ajouter</button>
        </div>
      </form>

      <h3 style={{ marginTop: '30px' }}>liste Articles</h3>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            {article.id} | {article.designation} | {article.prix}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticlFo;
