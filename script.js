$(document).ready(function () {
$('#addNote').click(function () {
const title = $('#noteTitle').val();
const text = $('#noteText').val();
if (!title || !text) return;

const note = $('<div class="note-item"></div>');
const content = $(`
<div class="note-content">
<strong>${title}</strong><br>
<span>${text}</span><br>
<small>${new Date().toLocaleString()}</small>
</div>
`);

const buttons = $(`
<div class="note-buttons">
<button class="delete-btn">Видалити</button>
<button class="archive-btn">Архівувати</button>
</div>
`);

buttons.find('.delete-btn').click(function () {
note.remove();
});

buttons.find('.archive-btn').click(function () {
note.toggleClass('archived');
const isArchived = note.hasClass('archived');
$(this).text(isArchived ? 'Розархівувати' : 'Архівувати');
});

note.append(content).append(buttons);
$('#notes').append(note);

$('#clearNote').click(function () {
$('#noteTitle').val('');
$('#noteText').val('');
});

});
});
