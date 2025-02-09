import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="text-4xl font-semibold">
        Willkommen auf der Startseite der MGA!
      </div>
      <div className="flex md:flex-row flex-col gap-4">
        <Card title="Über uns">
          Die Major Group Agency ist eine Discord Agentur, die im Dezember 2023
          offiziell gegründet wurde.Sie ist der offizielle Nachverfolger des
          Erfolgreichen Discord Servers &quot;Waterworld&quot;.Unsere Agentur
          spezialisiert sich hierbei auf die Marketing, Event- und Giveaway
          Veranstaltung Ihres Discord Servers! Ebenso sind wir in Bereichen wie
          Programmierung fester Bestandteil auf Discord und ohne uns wären viele
          kleine Server gar nicht denkbar.
        </Card>
        <Card title="Lorem Ipsum">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua.
        </Card>
      </div>
    </div>
  );
}
