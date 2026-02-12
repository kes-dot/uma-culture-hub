import { Play } from "lucide-react";

const videos = [
  {
    title: "Guiding Principles",
    description: "CEO Helen Mader shares the values that drive our culture and clinical excellence.",
    embedId: "2nmXyDw_6lw",
  },
];

const VideoSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 mb-4">
            <Play className="h-3 w-3 text-primary" />
            <span className="text-xs font-semibold text-primary">Culture & Values</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            See What Makes BF <span className="text-gradient">Different.</span>
          </h2>
          <p className="text-muted-foreground">
            Hear directly from our leadership and team about the values, mission, and culture that make Behavior Frontiers a place where clinicians thrive.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {videos.map((video) => (
            <div key={video.embedId} className="group">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated aspect-video bg-foreground/5">
                <iframe
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-bold text-foreground">{video.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
