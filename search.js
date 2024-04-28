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

function handleSearch() {
    const parameters = new URLSearchParams(location.search),
    searchField = document.getElementById("dl-input"),
    searchButton = document.getElementById("dl-button");

    if (!searchButton || !searchField)
        return;

    if (!parameters.get("search") || parameters.get("search").length === 0)
        return;

    searchField.value = parameters.get("search");
    searchButton.click();

    parameters.delete("search");
    history.replaceState({}, null, location.protocol + '//' + location.host + location.pathname);

    return;
};

handleSearch();
