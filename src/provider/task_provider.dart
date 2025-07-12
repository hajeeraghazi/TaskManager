import 'package:flutter/material.dart';

import '../models/task.dart';
import '../services/api_service.dart';

class TaskProvider with ChangeNotifier {
  List<Task> _tasks = [];
  final ApiService _apiService = ApiService();

  List<Task> get tasks => _tasks;

  Future<void> loadTasks() async {
    _tasks = await _apiService.fetchTasks();
    notifyListeners();
  }

  Future<void> addTask(String title, String description) async {
    Task newTask = await _apiService.createTask(title, description);
    _tasks.add(newTask);
    notifyListeners();
  }

  Future<void> updateTask(Task task) async {
    Task updated = await _apiService.updateTask(
        task.id, task.title, task.description, task.completed);
    int index = _tasks.indexWhere((t) => t.id == task.id);
    _tasks[index] = updated;
    notifyListeners();
  }

  Future<void> deleteTask(String id) async {
    await _apiService.deleteTask(id);
    _tasks.removeWhere((t) => t.id == id);
    notifyListeners();
  }
}
