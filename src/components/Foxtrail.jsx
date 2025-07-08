import React, { useState } from 'react';
import { Card, CardContent } from './ui/card.jsx';
import { Button } from './ui/button.jsx';
import { Input } from './ui/input.jsx';
import { motion } from 'framer-motion';

const posten = [
  {
    id: 1,
    frage:
      'Suchen Sie die Jahreszahl auf dem Brunnen. Der Bäcker ist 200 Jahr jünger als der Brunnen. Wie alt ist er?',
    loesung: '1824',
    hinweis:
      'Der Bäcker war die ganze Nacht mit seinem Lernenden am Brotbacken',
  },
  {
    id: 2,
    frage:
      'Wie viele Treppenstufen führen zur alten Stadtmauer beim Lindbergpark?',
    loesung: '43',
    hinweis:
      'Die Stadtmauer wurde zur Verteidigung genutzt – hier wurde einst gekämpft.',
  },
];

export default function Foxtrail() {
  const [aktuell, setAktuell] = useState(0);
  const [eingabe, setEingabe] = useState('');
  const [freigeschaltet, setFreigeschaltet] = useState(false);

  const pruefen = () => {
    if (eingabe.trim() === posten[aktuell].loesung) {
      setFreigeschaltet(true);
    } else {
      alert('Falsche Lösung, versuch es nochmals!');
    }
  };

  const weiter = () => {
    setEingabe('');
    setFreigeschaltet(false);
    setAktuell(aktuell + 1);
  };

  return (
    <main className="p-4 max-w-xl mx-auto space-y-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center"
      >
        🦊 Foxtrail Winterthur
      </motion.h1>

      {aktuell < posten.length ? (
        <Card className="shadow-xl rounded-2xl p-4">
          <CardContent className="space-y-4">
            <h2 className="text-xl font-semibold">
              Posten {posten[aktuell].id}
            </h2>
            <p>{posten[aktuell].frage}</p>
            <Input
              placeholder="Lösung eingeben..."
              value={eingabe}
              onChange={(e) => setEingabe(e.target.value)}
            />
            {!freigeschaltet && (
              <Button onClick={pruefen}>Antwort prüfen</Button>
            )}
            {freigeschaltet && (
              <div className="space-y-2">
                <p className="font-medium">Hinweis:</p>
                <p className="italic">{posten[aktuell].hinweis}</p>
                <Button onClick={weiter} className="mt-2">
                  Weiter zu Posten {posten[aktuell + 1]?.id || 'Ende'}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold">🎉 Foxtrail abgeschlossen!</h2>
          <p>Gut gemacht! Ihr habt alle Posten gefunden.</p>
        </div>
      )}
    </main>
  );
}
