# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

window.FARMA.showQuestion = ->
  $(document).on 'click', '.show-question', ->
    div_id = '#' + $(this).attr('data-target')
    if $(this).hasClass 'active'
      $(div_id).slideUp()
      $(this).removeClass 'active'
    else
      $(div_id).slideDown()
      $(this).addClass 'active'
