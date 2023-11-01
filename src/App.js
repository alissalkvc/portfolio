import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
       <section class=" mt-8">
        <div class="flex justify-center gap-8">
          <div><img class="h-52" src="./me.png" alt="Me at Leavenworth, WA, with snow in the background"/></div>
          <div class="basis-1/4 self-center font-medium text-xl">Alissa Likavec, Senior Front-End Engineer</div>
        </div>
        </section>
        <section class="px-32 mt-8">
          <p>Hello! I'm a senior front-end engineer with 7+ years of experience working in React applications. I'm based in Seattle, Washington.</p>
          <p>On a daily basis you can find me working with React, Typescript, and Next.js. I have also built and managed several design systems using React components.</p>
          </section>
          <section class="px-32 mt-8">
            <h3 class="text-center">Projects</h3>

          </section>
          <section class="px-32 mt-8">
          <p class="mt-8">I specialize in building experiences from start to finish: starting with user research, designing iteratively based on user feedback, and building low- and high-fidelity mockups as needed until the designs are ready to implement. Wherever I work I'm usually the bridge between design and engineering. I advocate for engineering when designers and product teams have questions, and also help engineers understand the specs, user needs, and accessibility requirements for implementation.</p>
          <p class="mt-8">In my spare time you can find me bird-watching, being in nature, or hanging out with my husband, pug, and/or cat.</p>
        </section>
      <Footer />
    </div>
  );
}

export default App;
