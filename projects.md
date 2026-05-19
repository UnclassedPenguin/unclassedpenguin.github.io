---
layout: page
title: Projects
description: A list of my projects.
permalink: /projects/
---

<ul>
    {% for item in site.data.projects %}
    <li class="project-list">
        {% if item.projectURL and item.projectGithub %}
            <h3 class="inline-block"><a href="{{ item.projectURL }}" target="_blank">{{ item.projectName }}</a></h3>
            <a href="{{ item.projectGithub }}" target="_blank">(source)</a>
        {% elsif item.projectURL %}
            <h3 class="inline-block"><a href="{{ item.projectURL }}" target="_blank">{{ item.projectName }}</a></h3>
        {% elsif item.projectGithub%}
            <h3 class="inline-block"><a href="{{ item.projectGithub }}" target="_blank">{{ item.projectName }}</a></h3>
            <a href="{{ item.projectGithub }}" target="_blank">(source)</a>
        {% endif %}
            <p class="project-description"> {{ item.projectDescription }} </p>
    </li>
    {% endfor %}
</ul>
