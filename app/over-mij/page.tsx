import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Over mij' };

export default function OverMijPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-primair mb-6">Over mij</h1>
      <p className="text-tekst/80 leading-relaxed">
        [Vertel hier jouw verhaal. Wie ben je, wat drijft je, hoe ben je hier gekomen?
        Schrijf vanuit je hart.]
      </p>
    </section>
  );
}
