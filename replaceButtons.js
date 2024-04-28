/**
 * Copyright © 2024 Danila Kononov (nickname: moony). All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const resultBlock = document.getElementById("dumping");

const observer = new MutationObserver(replaceButtons);

observer.observe(resultBlock, {childList: true, subtree: true});

function replaceButtons() {
    const buttons = document.querySelectorAll("button[data-url]");

    for (const button of buttons) {
        const link = document.createElement("a");
        link.classList.add("spty");
        link.textContent = button.textContent;
        link.href = `https://doubledouble.top/?download=${encodeURIComponent(button.getAttribute("data-url"))}&another=false`;

        if (button.textContent.toLowerCase().includes("service"))
            link.href = `https://doubledouble.top/?download=${encodeURIComponent(button.getAttribute("data-url"))}&another=true`

        button.parentNode.replaceChild(link, button);
    };

    return;
};
