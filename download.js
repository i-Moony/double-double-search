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

function handleDownload() {
    const parameters = new URLSearchParams(window.location.search);

    if (!parameters.get("download") || parameters.get("download").length === 0)
        return;

    let execute = `dl("${parameters.get("download")}");`;

    if (parameters.get("another") === "true")
        execute = `downloadFromOdesli("${parameters.get("download")}");`;

    const script = document.createElement("script");
    script.textContent = execute;
    document.body.appendChild(script);

    history.replaceState({}, null, location.protocol + '//' + location.host + location.pathname);

    return;
};

handleDownload();
