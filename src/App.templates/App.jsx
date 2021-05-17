import './App.css';


function App() {
  return (
    <div className="App">
      <h1>崩壊3rd</h1>
      <p>キャラ一覧</p>
     <img src="https://img.game8.jp/1706619/6b21d86fa721334d70703f360404d20e.png/show" onClick="imgwin('https://img.game8.jp/1706619/6b21d86fa721334d70703f360404d20e.png/show')"/>
     <img src="https://img.game8.jp/1706618/68b2ec552967233fab9560d7ab642ba5.png/show" onClick="imgwin('https://img.game8.jp/1706618/68b2ec552967233fab9560d7ab642ba5.png/show')"/>
     <img src="https://img.game8.jp/1706615/6394d192cd0df03795da939c608ae7b2.png/show" onClick="imgwin('https://img.game8.jp/1706615/6394d192cd0df03795da939c608ae7b2.png/show')"/>
     
    </div>
  );
}
<script type="text/javascript">
  function imgwin(img){
    window.open("img/"+img,"imgwindow","width=866,height=580");
  }  
</script>
export default App;
