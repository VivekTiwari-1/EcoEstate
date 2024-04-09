import Particles, { initParticlesEngine } from "@tsparticles/react"
import Particles_config from "./Particles_config"
import Particles_config_white from "./Particles_config_white";
import { loadSlim } from "@tsparticles/slim";
import { useEffect } from "react";

const Particle = (props) => {


    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => { });
    }, []);

    return (
        <div className="absolute">
            <Particles id="tsparticles" options={props.colour === "white" ? Particles_config_white : Particles_config} />;
        </div>
    )
}

export default Particle