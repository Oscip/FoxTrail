import React, { useState } from 'react';
import { Card, CardContent } from './ui/card.jsx';
import { Button } from './ui/button.jsx';
import { Input } from './ui/input.jsx';
import { motion } from 'framer-motion';
import { big } from 'framer-motion/client';

const posten = [
  {
    id: 1,

    frage:
      'Zähle wie viele rote streifen es gibt beim Pfahl am ende der Wylandsbrücke?',

    loesung: '3',

    bild: '/locations/wylandsbruecke.jpg',
  },

  {
    id: 2,

    frage:
      'Was für einen Buchstaben steht beim blauen Rechteck der sich auf einem Mast befindet?',

    loesung: 'S',

    bild: '/locations/mast.jpg',
  },

  {
    id: 3,

    frage: 'Was für eine Zahl steht hinter der Wand des Gebäude (grafitiert)',

    loesung: '161',

    bild: '/locations/grafitti.jpg',
  },

  {
    id: 4,

    frage: 'Was steht auf der Bank in gelb',

    loesung: 'FEELING LOST',

    bild: '/locations/bank.jpg',
  },

  {
    id: 5,

    frage: 'Was für eine Nummer steht auf dem architekturgedankenreicher Mast',

    loesung: '8',

    bild: '/locations/mast.jpg',
  },

  {
    id: 6,

    frage:
      'Was für einen Name hat die Bondendeckerrosse von Noack 2005 im Park?',

    loesung: 'Sedana',

    bild: '/locations/park.jpg',
  },

  {
    id: 7,

    frage: 'Was für eine maximale Frist gibt es um die Velos zu parkieren?',

    loesung: '48',
    bild: '/locations/velos.jpg',
  },
  {
    id: 8,
    frage: 'Wie viele Bäume hat es beim ZHAW Campus Stadt-Mitte?',
    loesung: '23',
    bild: '/locations/zhaw.jpg',
  },
  {
    id: 9,
    frage:
      'Wie viele Orte weisen die Schilder den Weg beim AZW? Nimm den so­viel­ten Buchstaben aus der Ortsüberschrift für die Lösung.',
    loesung: 'r',
    bild: '/locations/azw.jpg',
  },
  {
    id: 10,
    frage:
      'Um die Ecke des AZW gibt es eine Manta-Bar. Daneben befindet sich auf der anderen Straßenseite ein Brunnen mit zwei Becken. Wie hoch ist er?',
    loesung: '2.30m - 2.50m',
    bild: '/locations/manta.jpg',
  },
  {
    id: 11,
    frage:
      'Von deinem jetzigen Standort aus kannst du Richtung Nordwesten ein Firmengebäude sehen, das im Stadtbild herausragt. Zähle die Briefkästen. Nimm vom Schild mit der Bezeichnung der Straße die fünfte Firma, angefangen von oben links. Ermittle den Buchstabenwert des Anfangsbuchstabens der Firma (z. B. D = 4). Addiere die Anzahl Briefkästen dazu. Wandle das Ergebnis wieder in einen Buchstaben um. Das ist dein Lösungsbuchstabe.',
    loesung: 'u',
    bild: '/locations/firmengebaeude.jpg',
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
              <div>
                <Button onClick={pruefen}>Antwort prüfen</Button>
                <Button>Hinweis anzeigen</Button>
              </div>
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
