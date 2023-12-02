import React from "react";
import { Characters } from "../views/characters";
import { Planets } from "../views/planets";

export const Home = () => (
	<div className="text-center mt-5">
		<Characters />
		<Planets />
	</div>
);
