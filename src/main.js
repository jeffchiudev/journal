import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $("")
  let journal = [];
  let journalTitle = $("input#journal-title").val();
  let journalBody = $("input#journal-body").val();
  let journalEntry = new Entry(journalTitle,journalBody);
  journal.push(journalEntry);
})